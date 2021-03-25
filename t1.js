test('something incorrectly', async () => {
  // ...
  waitFor(() => {});

  const [usernameElement, passwordElement] = waitFor(
    () => [
      getByLabelText(container, 'username'),
      getByLabelText(container, 'password'),
    ],
    { container }
  );

  waitFor(() => {}, { timeout: 100 });

  waitForElementToBeRemoved(() => document.querySelector('div.getOuttaHere'));
});
