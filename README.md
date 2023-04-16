# Datamole's React / TypeScript assignment

Please, read following instructions and let us know if anything is not clear.

## General rules and requirements

* Use any npm package you find appropriate.
* Ask questions when in doubt what we expect.
* When you are not able to solve something in a reasonable amount of time, write an explanation of why
  (what knowledge is missing, why it requires so much time, etc.), and skip it.
* Follow all code quality principles you know and are used to.
* You should not spend with our assignment more than 6 hours.
  When this is not doable, choose what to implement and what not to.
* Send us your work as a link to a git repository (e.g. GitHub).

## Restrictions

- Do not modify the API (props) of the provided components.
- Do not use any component library (Material UI for example).
- Do not use Tailwind.

## Time estimation

* First read the assignment, check the provided code, and make sure you understand what we ask for.
* Try to estimate the time you will need to finish the assignment.
* Email us your estimation and a date, when you expect the work will be done.
  Aim for a realistic date and keep in mind all other responsibilities you may have
  (your current work, family duties, vacation or public holidays).

## Your assignment

Complete all the tasks below.

### Client application

More information about the client are in the `client/README.md`. Make sure you read them.

Using the provided UI components, implement the following modifications, bugfixes or new features (you can decide in what order):

#### Bugs

- [ ] **B1**: `List` content
  - The `List` component's content should be directly below the `Header` component (not centered between the `Header` and `Footer` components).
- [ ] **B2**: `Footer` alignment
  - The `Footer` component should be positioned at the bottom of the `Layout` component.
- [ ] **B3** `TodoItem` type
  - Fix the `TodoItem` type, so the data shape corresponds with the todo items that are saved on the server.

_Fix all other bugs and visual imperfections you find._

#### Features

- [ ] **F1**: `Footer` default values
  - Counters in the `Footer` component should show `0` when no value(s) are passed.
- [ ] **F2**: Load todo items
  - After opening the application, todo items should be displayed in the `TodoList`.
  - The displayed todo items should be loaded from the server.
- [ ] **F3**: Add a todo item
  - After clicking the `HeaderAddButton` component in the `Header`, a `Form` component should be showed instead of the `HeaderAddButton` component.
  - Entering a value inside the `Form` component and submitting it should create a new todo item with the value stored in its `label` field.
  - Data should be persisted on the server via API calls.
  - The list of the todo items on the client should be updated.
- [ ] **F4**: Edit a todo item's label
  - After clicking the `ListItemEditButton` component in the `ListItem`, a `Form` component should be showed instead of the `ListItemLabel`, `ListItemEditButton`, `ListItemRemoveButton` components.
  - Editing the value inside the `Form` component and submitting it should change the todo item's `label`.
  - Changes to the data should be persisted on the server via API calls.
  - The list of the todo items on the client should be updated.
- [ ] **F5**: Complete a todo item
  - After clicking on the `Checkbox` component in the `ListItem`, the todo item should be set as "done".
  - The "done" state should be displayed as a checked `Checkbox` in the `ListItem` component.
  - Clicking on the `Checkbox` again should set the todo item back to the "todo" state.
  - Changes to the data should be persisted on the server via API calls.
  - The list of the todo items on the client should be updated.
- [ ] **F6**: Remove a todo item
  - After clicking the `ListItemRemoveButton` component in the `ListItem`, the todo item should be removed.
  - Changes to the data should be persisted on the server via API calls.
  - The list of the todo items on the client should be updated.
- [ ] **F7**: Sort the todo items
  - Sort the list of the todo items:
    - "todo" items (not "done") should be displayed first,
    - after that, items should be sorted by their creation date, descending.
- [ ] **F8**: Count the todo items
  - Show a number of the "todo"/"done" items in the `Footer`. 
- [ ] **F9**: `Button` component
  - Create a `Button` component and use it instead of HTML `button` elements.

#### Styling

- [ ] **UI1**: `HeaderAddButton` alignment
  - `HeaderAddButton` component should be right-aligned in the `Header` component.
- [ ] **UI2**: `ListItem` actions alignment
  - Action buttons in the `ListItem` component should be right-aligned.
- [ ] **UI3**: `ListItem` actions visibility
  -  Action buttons in the `ListItem` component should be visible only when hovering over the `ListItem`.

#### Stories

- [ ] **SB1**: Add a story/stories for the `Layout` component.
- [ ] **SB2**: Add a story showing the `ListItem` with visible buttons (implemented in _"UI3"_).
- [ ] **SB3**: Add stories showing available `Button` variations.

### Server

- [ ] **S1**: Custom "done" endpoint 
  - Implement a custom API endpoint for setting/un-setting a single todo item as "done".
  - Calling this endpoint sets the `isDone` field to `true`/`false`.
  - Additionally, a new field `finishedAt` should be populated. Value should be the current time when the item is "done" and `null` when it is not "done".
  - Use this new endpoint in the client.

### Advanced tasks (optional)

- [ ] **O1**: Modify the `Form` component (and other related components if needed) so the form field handles not only string values, but also numbers. Treat empty string input as `undefined`.
- [ ] **O2**: Limit the amount of server calls needed to a necessary minimum.

## Additional comments

- Feel free to do any visual modifications that - in your opinion - improve the design of the application.
- Feel free to install and use any public package you may need.

### GitHub

- Do your best to use atomic commits.
- In each commit that solves (fully or partly) one of the tasks above, add the task's id into the commit message. For example: _"B1: fix typo in ..."_.

### Storybook

- We use the Storybook's format CSF3, but you can use the older version of the CSF format if you are more familiar with it.
- If you are not familiar with Storybook at all: try to complete at least the task _"SB2"_. It should be doable only by copying and modifying the already existing story.