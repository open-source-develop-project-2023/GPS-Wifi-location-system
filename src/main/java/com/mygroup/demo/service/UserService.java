package com.mygroup.demo.service;

import lombok.RequiredArgsConstructor;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mygroup.demo.repository.UserRepository;
import com.mygroup.demo.dto.UserDTO;
import com.mygroup.demo.entity.UserEntity;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;

    public void save(UserDTO userDTO) {
        UserEntity userEntity = UserEntity.toUserEntity(userDTO);
        userRepository.save(userEntity);
    }

    public UserDTO login(UserDTO userDTO) {
        Optional<UserEntity> byUserEmail = userRepository.findByUserEmail(userDTO.getUserEmail());
        if(byUserEmail.isPresent()) {
            UserEntity userEntity = byUserEmail.get();
            if(userEntity.getUserPassword().equals(userDTO.getUserPassword())){
                UserDTO dto = UserDTO.toUserDTO(userEntity);
                return dto;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}
