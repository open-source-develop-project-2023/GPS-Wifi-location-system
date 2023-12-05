package com.mygroup.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

import com.mygroup.demo.service.UserService;
import com.mygroup.demo.dto.UserDTO;

@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    
    @GetMapping("/save")
    public String saveForm() {
        return "save";
    }

    @PostMapping("/save")
    public String save(@ModelAttribute UserDTO userDTO) {
        System.out.println("userController.save");
        System.out.println("userDTO = " + userDTO);
        userService.save(userDTO);

        return "save";
    }
    
    @GetMapping("/login")
    public String loginForm() {
        return "login";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute UserDTO userDTO, HttpSession session) {
        UserDTO loginResult = userService.login(userDTO);
        if (loginResult != null) {
            session.setAttribute("loginEmail", loginResult.getUserEmail());
            return "calander";
        } else {
            return "login";
        }
    }
}
