import { Ref, Slots, computed } from "vue";

const usePagination = ({
  page,
  changePage,
  slots,
}: {
  page: Ref<number>;
  changePage: (page: number) => void;
  slots: Slots;
}) => {
  const getTotalPages = computed(
    () =>
      Object.keys(slots).filter((item) => item.indexOf("page") !== -1).length,
  );

  const getPagesValue = computed(() => {
    const keys = Object.keys(slots).filter(
      (item) => item.indexOf("page") !== -1,
    );
    const values = keys.map(
      (item) => page.value === Number(item.split("-")[1]) && slots[item]?.(),
    );
    return values;
  });

  const handleClickPrevPage = () => {
    if (page.value > 1) {
      changePage(page.value - 1);
    }
  };

  const handleClickNextPage = () => {
    if (page.value < getTotalPages.value) {
      changePage(page.value + 1);
    }
  };

  const pagination = () =>
    getTotalPages.value > 0 && (
      <div class="vs-alert__pagination">
        <button onClick={handleClickPrevPage}>{`<`}</button>
        <span>{`${page.value} / ${getTotalPages.value}`}</span>
        <button onClick={handleClickNextPage}>{`>`}</button>
      </div>
    );

  return { page, getPagesValue, pagination };
};

export default usePagination;
