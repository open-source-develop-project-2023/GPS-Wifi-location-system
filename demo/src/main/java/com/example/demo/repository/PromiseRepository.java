package com.example.demo.repository;

import com.example.demo.entity.Promise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PromiseRepository extends JpaRepository<Promise, Long> {
    @Override
    List<Promise> findAll();

    boolean existsBy_date(String _date);

    List<Promise> findBy_date(String _date);
    
    
    void deleteAllInBatch();
    
    @Modifying
    @Query("DELETE FROM Promise p WHERE p._date = :_date")
    void deleteAllBySDate(@Param("_date") String _date);
}
