package com.mygroup.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import com.mygroup.demo.entity.UserEntity;
import com.mygroup.demo.dto.UserDTO;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserDTO {
    private Long id;
    private String userEmail;
    private String userPassword;
    private String userName;

    public static UserDTO toUserDTO(UserEntity userEntity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(userEntity.getId());
        userDTO.setUserEmail(userEntity.getUserEmail());
        userDTO.setUserName(userEntity.getUserName());
        userDTO.setUserPassword(userEntity.getUserPassword());

        return userDTO;
    }
}
