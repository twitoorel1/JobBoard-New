export const REMOVE_USER_FIELDS = ["-password", "-jwt_ac_token", "-jwt_rf_token", "-__v", "-createdAt", "-updatedAt"].join(" ");

export const SELECTED_USER_FIELDS = [
  "_id",
  "email",
  "username",
  "firstName",
  "lastName",
  "role",
  "imgSRC",
  "pinned_items",
].join(" ");
