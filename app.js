M.AutoInit();
const ui = new UI(),
  activity = new Activity();

ui.displayTypes();

window.addEventListener('DOMContentLoaded', function () {
  ui.displayLsActivity();
});

const check = document.querySelectorAll('.check');

// Get And Display Activity
document.querySelector('.btn').addEventListener('click', () => {
  check.forEach((el) => {
    if (el.checked === true) {
      activity.getActivity(el.value).then((data) => {
        UI.displayActivity(data.activity.activity);
        Store.addActivities(data.activity.activity);
      });
    }
  });
});

// Remove Activity
document.querySelector('.collection').addEventListener('click', (e) => {
  ui.removeActivity(e.target.parentElement.parentElement.parentElement);

  Store.removeActivities(e.target.parentElement.parentElement);
});
