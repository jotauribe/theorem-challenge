# Front-end exercise

See the [development guide](./CONTRIBUTING.md).

## Process

1. Select (at least) 1 task from each of the task groups below - the choice is yours but try to complete at least 1 task from each group.
2. For each task create a feature branch, then open and merge a PR to the `main` branch when the task is completed. For each completed task we should see a corresponding PR. We will not be able to give a review during your work, so merge PRs yourself without waiting for review approval.
3. Deploy your project so it's publicly available on the web. One option is [Netlify](https://www.netlify.com/), but many other options exist.
4. Let us know if you have any questions, and when you're finished with the project, in the designated Slack channel.

You can change any existing code or dependencies. Ideally add a brief explanation why.

At the end of the exercise, please replace the contents of this README with your explanations of what you’ve done, added, changed, or anything else that makes sense to document.

## Tasks

There are groups of tasks we have prepared for this exercise. Inside the groups the tasks at the top of the list are more important than items at the bottom.

There are purposefully too many tasks, there is no goal to do all of them. Use your judgement working on the tasks. It’s okay to skip a task that is needlessly difficult.

We would like you to spend about 8 hours of development time. In this time, please do at least one task from each group to show some diversity, and use the remaining time to do additional tasks from each group. So a minimum of 4 tasks, and more if you have time.

It’s okay to change UI design and behavior if you have good input, as long as you communicate the changes. It’s great to add something that’s not on the list if it does not cost a lot of effort.

Project designs are available [in Figma](https://www.figma.com/file/0502uQRIymsq7BEQBhid91bV/Untitled?node-id=0%3A1).

### New UI

- [ ] Add a “No Reviews Yet” screen to the Review Feedback section.
- [ ] Add a questionnaire completion indicator.

### Improving UI

- [ ] Improve the layout on smaller screens. In particular, the Review feedback view looks bad right now.
- [ ] Handle avatar loading errors, make them look nicer.
- [ ] Fix the background style. Right now it depends on the page length, so when a user navigates between different pages, the bottom right corner of the background shifts around.

### New interactive features

- [ ] Add a feature to save a questionnaire and continue it later.
- [ ] Add more question types: a multiple choice, a rating slider.
- [ ] Add a view for feedback you have received.
- [ ] Add a feedback period selector.

### Improving interactive features

- [ ] Add a feature to skip a question.
- [ ] Handle network errors when submitting feedback
- [ ] Retry button on the crash screen should do something
