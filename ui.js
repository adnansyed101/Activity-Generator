class UI {
  constructor() {
    this.types = [
      'education',
      'recreational',
      'social',
      'diy',
      'charity',
      'cooking',
      'relaxation',
      'music',
      'busywork',
    ];
  }

  displayTypes() {
    let output = '';
    this.types.forEach((type) => {
      output += `
      <label for=${type}>
      <input name="group1" type="radio" id='${type}' value='${type}' class='check''/>
      <span>${type}</span>
    </label>
      `;
    });

    document.querySelector('.type').innerHTML = output;
  }

  displayLsActivity() {
    const activities = Store.getActivities();

    activities.forEach((activity) => {
      UI.displayActivity(activity);
    });
  }

  static displayActivity(activity) {
    document.querySelector(
      '.collection'
    ).innerHTML += `<li class="collection-item"><div>${activity}<a href="#!" class="secondary-content"><img src="close_black_24dp.svg"></a></div></li>`;
  }

  removeActivity(target) {
    if (target.classList.contains('collection-item')) {
      target.remove();
    }
  }
}
