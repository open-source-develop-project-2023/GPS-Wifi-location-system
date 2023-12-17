package com.example.demo.entity;

import lombok.ToString; 
import lombok.Getter; 
import lombok.Builder; 
import lombok.AllArgsConstructor; 
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.Table; 
import jakarta.persistence.Entity; 
import jakarta.persistence.Id; 
import jakarta.persistence.GeneratedValue; 
import jakarta.persistence.GenerationType; 

import jakarta.persistence.Column; 

@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "promise")
@Entity
public class Promise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "_date", nullable = false, length = 20)
    private String _date;

    @Column(name = "_location", nullable = false, length = 200)
    private String _location;

    @Column(name = "_contents", nullable = false, length = 200)
    private String _contents;

    public Promise(String _date, String _location, String _contents) {
        this._date = _date;
        this._location = _location;
        this._contents = _contents;
    }

    public String get_date() {
        return _date;
    }

    public String get_location() {
        return _location;
    }

    public String get_contents() {
        return _contents;
    }
}
