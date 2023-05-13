import { computed, useSlots } from "vue";

const usePagination = (page: number, changePage: (page: number) => void) => {
  const slots = useSlots();

  const getTotalPages = computed(() => {
    const keys = Object.keys(slots).filter(
      (item) => item.indexOf("page") !== -1
    );
    return keys.length;
  });

  const getPagesValue = computed(() => {
    const keys = Object.keys(slots).filter(
      (item) => item.indexOf("page") !== -1
    );
    const values = keys.map(
      (item) => page === Number(item.split("-")[1]) && slots[item]
    );
    return values;
  });

  const handleClickPrevPage = () => {
    if (page > 1) {
      changePage(page - 1);
    }
  };

  const handleClickNextPage = () => {
    if (page < getTotalPages.value) {
      changePage(page + 1);
    }
  };

  const pagination = getTotalPages.value > 0 && (
    <div class="vs-alert__pagination">
      <button onClick={handleClickPrevPage}></button>
      <span>{`${page} / ${getTotalPages.value}`}</span>
      <button onClick={handleClickNextPage}></button>
    </div>
  );

  return { page, getPagesValue, pagination };
};

export default usePagination;
