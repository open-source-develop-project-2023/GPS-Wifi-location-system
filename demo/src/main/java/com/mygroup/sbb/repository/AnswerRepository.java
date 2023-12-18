package com.mygroup.sbb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mygroup.sbb.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Integer>{
    
}
