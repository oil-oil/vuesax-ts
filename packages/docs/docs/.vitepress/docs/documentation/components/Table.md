
  ---  
PROPS:  
- name: v-model  
type: object, array  
values: object, array  
description: Determines the table values ​​that are selected.  
default: null  
link: null  
usage: '#single-selected'  
code: >  
<vs-table v-model="selected">  
  - name: striped  
  type: Boolean  
  values: true,false  
  description: Add stripes to the gray tr.  
  default: null  
  link: null  
  usage: '#striped'  
  code: >  
  <vs-table striped>  
    - name: vs-tr:data  
    type: object  
    values: object  
    description: when the functionality of selected is needed this property is needed since it is the object that is  
    passed to the v-model.  
    default: null  
    link: null  
    usage: '#single-selected'  
    code: >  
    <vs-tr :key="i" v-for="(tr, i) in users" :data="tr" :is-selected="selected == tr">  
      ...  
    </vs-tr>  
    - name: vs-tr:is-selected  
    type: Boolean  
    values: true,false  
    description: Determines if the component is in the selected state.  
    default: false  
    link: null  
    usage: '#single-selected'  
    code: >  
    <vs-tr :key="i" v-for="(tr, i) in users" :data="tr" :is-selected="selected == tr">  
      ...  
    </vs-tr>  
    - name: vs-td:edit  
    type: Boolean  
    values: true,false  
    description: Determine if the element is editable by adding underline and the pointer cursor.  
    default: false  
    link: null  
    usage: '#edit-data'  
    code: >  
    <vs-td edit @click="edit = tr, editProp = 'name', editActive = true">  
      {{ tr.name }}  
    </vs-td>  
    - name: vs-th:sort  
    type: Boolean  
    values: true,false  
    description: Add the sort arrows to the corresponding th.  
    default: false  
    link: null  
    usage: '#search-and-sort'  
    code: >  
    <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">  
      Name  
    </vs-th>  
    - name: vs-tr:color  
    type: String, vuesax colors  
    values: color, vuesax colors  
    description: Change the color of the tr.  
    default: null  
    link: null  
    usage: '#state'  
    code: >  
    <vs-tr :key="i" v-for="(tr, i) in users" :data="tr" :danger="tr.id == 3" :success="tr.id == 5" :primary="tr.id == 8"  
      :warn="tr.id == 9">
  
      SLOTS:  
      - name: header  
      type: slot  
      values: null  
      description: Space to put an element at the top of the table such as the input search.  
      default: null  
      link: null  
      usage: '#search-and-sort'  
      code: >  
      <template #header>  
        ...  
      </template>  
      - name: thead  
      type: slot  
      values: null  
      description: Space representing thead element of the table where the ` ` components will be placed.  
      default: null  
      link: null  
      usage: '#default'  
      code: >  
      <template #thead>  
        <vs-tr>  
          <vs-th>  
            Name  
          </vs-th>  
          <vs-th>  
            Email  
          </vs-th>  
          <vs-th>  
            Id  
          </vs-th>  
        </vs-tr>  
      </template>  
      - name: tbody  
      type: slot  
      values: null  
      description: Represents the tbody element in the table and here we will put the ` ` components.  
      default: null  
      link: null  
      usage: '#default'  
      code: >  
      <template #tbody>  
        <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">  
          <vs-td>  
            {{ tr.name }}  
          </vs-td>  
          <vs-td>  
            {{ tr.email }}  
          </vs-td>  
          <vs-td>  
            {{ tr.id }}  
          </vs-td>  
        </vs-tr>  
      </template>  
      - name: vs-tr:#expand  
      type: slot  
      values: null  
      description: Represents the interior of the tr when it is expanded.  
      default: null  
      link: null  
      usage: '#expand'  
      code: >  
      <template #expand>  
        <div class="con-content">  
          <div>  
            <vs-avatar>  
              <img :src="`                            `" alt="">  
            </vs-avatar>  
            <p>  
              {{ tr.name }}  
            </p>  
          </div>  
          <div>  
            <vs-button flat icon>  
              <i class='bx bx-lock-open-alt'></i>  
            </vs-button>  
            <vs-button flat icon>  
              Send Email  
            </vs-button>  
            <vs-button border danger>  
              Remove User  
            </vs-button>  
          </div>  
        </div>  
      </template>  
      - name: notFound  
      type: slot  
      values: null  
      description: Change the item to display when there are no items in the table.  
      default: null  
      link: null  
      usage: '#search'  
      code: >  
      <template #notFound>  
        Not Found  
      </template>
  
      NEWS:  
      - name  
      ---
  
      # Table
  
      <card>
  
        ## Default
  
        <docs-warn />
  
        Create a table simply with the ` ` component and its` `, ` `,` ` components.
  
        This component has a different logic for better data management and freer customization according to needs.
  
        <div slot="example">  
          <Table-default />  
        </div>
  
        <div slot="template">
  
          ``` ```
  
        </div>
  
        <div slot="script">
  
          ``` ```
  
        </div>
  
      </card>
  
      <card>
  
        ## Striped
  
        You can easily strip the table with the ` ` property
  
        <div slot="example">  
          <Table-striped />  
        </div>
  
        <div slot="template">
  
          ``` ```
  
        </div>
  
        <div slot="script">
  
          ``` ```
  
        </div>
  
      </card>
  
      <card>
  
        ## State
  
        Change the state of a tr by adding the color property to the component ` `
  
        <div slot="example">  
          <Table-state />  
        </div>
  
        <div slot="template">
  
          ``` ```
  
        </div>
  
        <div slot="script">
  
          ``` ```
  
        </div>
  
      </card>
  
      <card>
  
        ## Pagination
  
        You can add the pagination functionality for the table using the ` ` slot and the vs-pagination component
  
        To make the development easier you can use the vuesax function that generates the items (` `) based on the page  
        and also the one that generates the total number of pages in the pagination component (` `)
  
        This way of handling data is to improve the freedom of customization without losing the ease of implementation
  
        <div slot="example">  
          <Table-pagination />  
        </div>
  
        <div slot="template">
  
          ``` ```
  
        </div>
  
        <div slot="script">
  
          ``` ```
  
        </div>
  
      </card>
  
      <card>
  
        ## Single Selected
  
        You can add the select functionality with a v-model in the table and the ` ` property
  
        :::tip TIP  
        Using the ` ` property in the ` ` is important as that is the data to be added to the v-model  
        :::
  
        <div slot="example">  
          <Table-selected />  
        </div>
  
        <div slot="template">
  
          ``` ```
  
        </div>
  
        <div slot="script">
  
          ``` ```
  
        </div>
  
      </card>
  
      <card>
  
        ## Multiple Selected
  
        You can do multiple select functionality in the table with the ` ` property with its value being an array
  
        for this functionality you can use for example the vuesax checkboxes and the global function ` ` in the checkbox  
        of th
  
        <div slot="example">  
          <Table-multiple />  
        </div>
  
        <div slot="template">
  
          ``` ```
  
        </div>
  
        <div slot="script">
  
          ``` ```
  
        </div>
  
      </card>
  
      <card>
  
        ## Expandable data
  
        To add a ` ` that can display expanded data use the` ` slot inside the ` ` component.
  
        <div slot="example">  
          <Table-expand />  
        </div>
  
        <div slot="template">
  
          ``` ```
  
        </div>
  
        <div slot="script">
  
          ``` ```
  
        </div>
  
      </card>
  
      <card>
  
        ## Edit data
  
        You can edit the data inside the table easily using the ` ` component and the magic of vuejs
  
        <div slot="example">  
          <Table-edit />  
        </div>
  
        <div slot="template">
  
          ``` ```
  
        </div>
  
        <div slot="script">
  
          ``` ```
  
        </div>
  
      </card>
  
      <card>
  
        ## Search and sort
  
        The search functionality is now independent and you can use the global function ` `
  
        ::: tip TIP  
        The ` ` function needs two parameters: the data of the table to filter and the text to search  
        :::
  
        #### sort
  
        sort functionality is independent and you can use the global function ` `
  
        ::: tip TIP  
        The ` ` function needs 3 parameters: the event, the data of the table and the item to be ordered.  
        :::
  
        <div slot="example">  
          <Table-search />  
        </div>
  
        <div slot="template">
  
          ``` ```
  
        </div>
  
        <div slot="script">
  
          ``` ```
  
        </div>
  
      </card>
  
      <card>
  
        ## Miscellaneous
  
        This is a sample of everything united and its functionality together
  
        ::: tip  
        This component is created for much freer customization regarding data handling, for example if you need  
        server-side pagination you just don't use the global function ` `.  
        :::
  
        <div slot="example">  
          <Table-miscellaneous />  
        </div>
  
        <div slot="template">
  
          ``` ```
  
        </div>
  
        <div slot="script">
  
          ``` ```
  
        </div>
  
      </card>
  
      <card>
  
        ## Functions
  
        We create this component with a different logic and maybe something not very common as a first point we want  
        development to be more free and for the programmer to have many options and customization based on what he needs  
        and wants to create, for example a very important theme it is the queries of the data in the server and that now  
        they are not manipulated by the component until you yourself using a vuesax function impose it
  
        So now we use global functions that you can use if you need them such as
  
        - $vs.checkAll: it makes the check functionality to all the items and if they are all in check it removes them  
        - $vs.sortData: it makes it possible to move all the elements from bottom to top or from top to bottom and to  
        their initial position (in order to save this position, a property is added to the iterated object)  
        - $vs.getSearch: returns the items that match the search in the entire array  
        - $vs.getPage: returns the elements of the page based on the items and the maximum to show  
        - $vs.getLength: returns the length for pagination based on the items and the maximum
  
      </card>
  
      <card>
  
        ## API
  
      </card>
