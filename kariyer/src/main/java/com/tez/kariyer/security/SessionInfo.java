package com.tez.kariyer.security;

import com.tez.kariyer.model.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SessionInfo {

    static SessionInfo instance;
    User user;

    public static SessionInfo getInstance(){
        if (instance == null){
            instance=new SessionInfo();
        }
        return instance;
    }
}
