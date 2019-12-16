var user = {
  login: function (options) {
    $.ajax({
      type: 'post',
      url: LOGIN_URL,
      data: {
        user_name: options.data.username,
        password: options.data.password,
      },
      success: function (res) {
        if (res.code === 200) {
          options.success();
        } else {
          options.fail();
        }
      }

    })
  },
  logout: function (options) {
    $.ajax({
      type: 'post',
      url: LOGOUT_URL,
      success: function (res) {
        if (res.code === 200) {
          options.success();
        } else {
          options.fail();
        }

      }
    })

  }

}