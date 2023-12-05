package com.mygroup.demo.entity;

import com.mygroup.demo.dto.UserDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id; 

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name="user_table")
public class UserEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true) 
    private String userEmail;

    @Column
    private String userPassword;

    @Column
    private String userName;

    public static UserEntity toUserEntity(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setId(userDTO.getId());
        userEntity.setUserEmail(userDTO.getUserEmail());
        userEntity.setUserName(userDTO.getUserName());
        userEntity.setUserPassword(userDTO.getUserPassword());
        return userEntity;
    }
}
