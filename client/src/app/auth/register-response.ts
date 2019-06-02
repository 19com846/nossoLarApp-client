export interface RegisterResponse {
    user: {
        id: Number,
        date_joined: Date,
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        group: Number,
        is_active: Boolean,
        is_staff: Boolean,
        is_superuser: Boolean,
        last_login: String,
        phone: String,
        user_permissions: [],
        username: String


    }
}
