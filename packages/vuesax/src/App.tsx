import { defineComponent, ref } from "vue";

import {
  VsAvatar,
  VsAvatarGroup,
  VsCheckbox,
  VsInput,
  VsOption,
  VsSelect,
  VsTable,
  VsTd,
  VsTh,
  VsTr,
} from "./components";

export default defineComponent({
  setup() {
    const data = ref([
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        website: "elvis.io",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
      },
    ]);

    const search = ref("");
    return () => (
      <>
        <VsTable
          striped
          v-slots={{
            header: () => (
              <VsInput
                v-model={search.value}
                border
                placeholder="Search"
                style={{ width: "100%" }}
              />
            ),
            thead: () => (
              <VsTr>
                <VsTh>
                  <VsCheckbox></VsCheckbox>
                </VsTh>
                <VsTh sort>Name</VsTh>
                <VsTh sort>Email</VsTh>
                <VsTh>Id</VsTh>
              </VsTr>
            ),
            tbody: () =>
              data.value.map(({ username, email, id }) => (
                <VsTr
                  v-slots={{
                    expand: () => <div style={{ width: "100%" }}>123</div>,
                  }}
                >
                  <VsTd checkbox>
                    <VsCheckbox
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    ></VsCheckbox>
                  </VsTd>
                  <VsTd checkbox>{id}</VsTd>
                  <VsTd>{username}</VsTd>
                  <VsTd>{email}</VsTd>
                </VsTr>
              )),
          }}
        ></VsTable>
      </>
    );
  },
});
