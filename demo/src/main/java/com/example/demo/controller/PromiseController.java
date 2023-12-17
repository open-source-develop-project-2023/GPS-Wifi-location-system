package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Promise;
import com.example.demo.repository.PromiseRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;

@RequiredArgsConstructor
@RestController
public class PromiseController {
    final PromiseRepository promiseRepository;
    
    public static class PromiseInfo { // post를 통해서 전송해준 json 객체에서 데이터를 뽑기 위해서 쓰는 class
        private String _date;
        private String _location;
        private String _contents;
        
        public PromiseInfo(String _date, String _location, String _contents) {
            this._date = _date;
            this._location = _location;
            this._contents = _contents;
        }

        public String get_date() { // json 객체에서 _date 추출
            return this._date;
        }

        public String get_location() { // json 객체에서 _location 추출
            return this._location;
        }

        public String get_contents() { // json 객체에서 _contents 추출
            return this._contents;
        }
    }
    

    // localhost:8080/make_promise url을 만들어놓겠다. -> post 요청을 했을 때만 접속 가능
    // GetMapping: 웹페이지에서 접근 가능
    // PostMapping: 웹페이지에서 접근하면 405 에러가 떠야 함(정상)
    // PostMapping이 제대로 되는지 확인하기 위해서는 post를 해보고 System.out.println();
    // System.out.println의 내용은 spring boot가 실행되는 vscode 터미널에서 확인할 수 있음
    @PostMapping("/make_promise") 
    public boolean makePromise(@RequestBody PromiseInfo promiseInfo) { // json -> @RequestBody PromiseInfo promiseInfo 
        // var int i 
        // @RequestBody: json이라는 데이터 타입
        // PromiseInfo: 객체의 데이터 타입

        // PromiseInfo class를 가진 promiseInfo를 가진  인자 = 전송해준 json 데이터
        // RequestBody: json 데이터를 가져오는 친구
        // RequestParams: json 데이터 중에서 일부만 가져올 수 있음

        System.out.println(promiseInfo.get_date()); // get_date method를 통해서 post한 _date 가져오기
        System.out.println(promiseInfo.get_location()); // get_location method를 통해서 post한 _location 가져오기
        System.out.println(promiseInfo.get_contents()); // get_contents method를 통해서 post한 _contents 가져오기

        Promise promise = new Promise(
            promiseInfo.get_date(),
            promiseInfo.get_location(),
            promiseInfo.get_contents()
        );
        System.out.println(promise.get_date());
        promiseRepository.save(promise);
        System.out.println("새로운 정보가 저장되었습니다.");

        return true;
    }

    @PostMapping("/check_promise")
    public List<Promise> checkPromise(@RequestBody PromiseInfo promiseInfo) {
        return promiseRepository.findBy_date(promiseInfo.get_date());
    }

    @GetMapping("/check_event")
    public List<Promise> checkEvent() { 
        return promiseRepository.findAll();
    }

    @PostMapping("/delete_promise")
    public void popPromise(@RequestBody PromiseInfo promiseInfo) {        
        System.out.println("삭제 됐냐?");
        promiseRepository.deleteAllInBatch();
    }
}