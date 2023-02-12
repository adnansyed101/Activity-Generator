class Activity {
  async getActivity(type) {
    const activityResponse = await fetch(
      `http://www.boredapi.com/api/activity?type=${type}`
    );

    const activity = await activityResponse.json();

    return {
      activity,
    };
  }
}
