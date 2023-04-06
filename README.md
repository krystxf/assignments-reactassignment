# Datamole's React / TypeScript assignment

Please, read following instructions and let us know if anything is not clear.

## General rules and requirements

* Use any npm package you find appropriate.
* Ask questions when in doubt what we expect.
* When you are not able to solve something in reasonable amount of time, write an explanation of why
  (what knowledge is missing, why it needs so much time, etc.), and skip it.
* Follow all code quality principles you know and are used to.
* You should not spend with our assignment more than 6 hours.
  When this is not doable, choose what to implement and what not to.
* Send us your work preferably as a link to git repository (e.g. GitHub).

## Restrictions

- Do not modify the API (props) of the provided components.
- Do not use any component library (Material UI for example).
- Do not use Tailwind.

## Time estimation

* First read the assignment, check the provided code, and make clear you understand what we ask for.
* Try to estimate the time you require to finish it.
* Email us your estimation and a date, where you expect the work to be done.
  Aim for realistic date and keep in mind all other responsibilities you may have
  (your current work, family duties, vacation or public holidays).

## The actual work

### Client app

More information about client are in `client/README.md`. Make sure you read them.

Using provided UI components, implement the following modifications, bugfixes or new features (you can decide in what order):

- [ ] **B1**: Fix all bugs and visual imperfections you find.
- [ ] **B2**: Fix layout of the non-empty `List` component.
- [ ] **B3**: Fix the `Layout` component so the `Footer` is always attached to the bottom of the `Layout`.
- [ ] **UI1**: Style the `Header` so the "add" button is right-aligned.
- [ ] **UI2**: Style the `ListItem` so the action buttons are right-aligned.
- [ ] **UI3**: Style the `ListItem` so the action buttons are only visible when hovering over the item.
- [ ] **F1**: Modify the `Footer` to show 0 when no value(s) were passed.
- [ ] **F2**: After button in the `Header` is clicked, show `Form` component in the `Header` instead of the clicked button. If the form is submitted, a new list should be saved on the server and the list of all items should be updated.
- [ ] **F3**: When the edit button in the `ListItem` is clicked, its content should be replaced by the `Form` component (same as for creating new todo item).
- [ ] **F4**: Load items from API.
   1) Implement removing of a todo item.
   1) Implement saving "checked" state of a todo item when changed.
   1) Persist all changes, additions and removals of todo items on server using API calls.
- [ ] **F5**: Sort the list of todo items so the "done" (=checked) items are on the bottom; next sort items by creating date, descending.
- [ ] **F6**: Show a number of todo/done items in the `Footer`.
- [ ] **F7**: Create a `Button` component and use it instead of all `button` HTML elements.
- [ ] **SB1**: Add a story/stories for the `Layout` component.
- [ ] **SB2**: Add a story showing the `ListItem` with visible buttons (implemented in _"UI3"_).
- [ ] **SB3**: Add stories showing available `Button` variations.

### Server

- [ ] **S1**: Implement a custom endpoint for marking single todo item as "done". Calling this endpoint sets the `done` field to `true` and the `finishedAt` field to current time. Use this new endpoint in the client.

### Advanced tasks (optional)

- [ ] **O1**: Modify the `Form` component (and other related components if needed) so the form field handles not only string values, but also number. Treat empty string input as `undefined`.
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


