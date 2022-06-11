module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Please add a username.";
  }
  if (email.trim() === "") {
    errors.username = "Please add an email.";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Please enter a valid email address.";
    }
  }
  if (password === "") {
    errors.password = "Please enter a valid password.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (email, password) => {
  const errors = {};
  if (email.trim() === "") {
    errors.email = "Please add a email.";
  }
  if (password === "") {
    errors.username = "Password must not be empty.";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLocationInput = (username, name, description, long, lat) => {
    const errors = {};
    if(username.trim() === "") {
        errors.username = "Please enter your username.";
    }
    if(name.trim() === "") {
        errors.name = "Please enter location name.";
    }
    if(description.trim() === "") {
        errors.description = "Please enter a location description.";
    }
    if(username.trim() === "") {
        errors.username = "Please enter your username.";
    }
    if(lat === "") {
        errors.lat = "The latitude coordinate was not entered.";
    }
    if(long === "") {
        errors.long = "The longitude coordinate was not entered."
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1,
      };
}