enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  COSTUMER = "costumer"
}

type User = {
  username: string;
  role: ROLES;
}

const FelipeUser: User = {
  username: "Felipe",
  role: ROLES.ADMIN,
}
