package Back_end.models;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponse {

    private String name;
    private String last_name;
    private String email;
    private String token;
    private String message;
}
