package com.mygroup.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mygroup.demo.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{
        Optional<UserEntity> findByUserEmail(String userEmail);
}
