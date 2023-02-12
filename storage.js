class Store {
  static getActivities() {
    let activities;
    if (localStorage.getItem('activities') === null) {
      activities = [];
    } else {
      activities = JSON.parse(localStorage.getItem('activities'));
    }

    return activities;
  }

  static addActivities(activity) {
    const activities = Store.getActivities();

    activities.push(activity);

    localStorage.setItem('activities', JSON.stringify(activities));
  }

  static removeActivities(target) {
    const activities = Store.getActivities();

    activities.forEach((activity, index) => {
      if (target.textContent === activity) {
        activities.splice(index, 1);
      }
    });

    localStorage.setItem('activities', JSON.stringify(activities));
  }
}
