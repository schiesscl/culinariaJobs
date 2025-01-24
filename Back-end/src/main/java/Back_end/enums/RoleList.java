package Back_end.enums;

public enum RoleList {
    ROLE_USER, ROLE_ADMIN;

    public static RoleList getById(int id) {
        RoleList[] roles = RoleList.values();
        if (id >= 0 && id < roles.length) {
            return roles[id];
        }
        throw new IllegalArgumentException("ID de rol no válido: " + id);
    }
}
