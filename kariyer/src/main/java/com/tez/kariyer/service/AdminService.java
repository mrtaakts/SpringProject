package com.tez.kariyer.service;

import com.tez.kariyer.dto.UserDTO;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.UserRepository;
import com.tez.kariyer.security.SessionInfo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class AdminService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    ModelMapper modelMapper;

    public List<UserDTO> DataResponse() {

        List<User> userList = (List<User>) userRepository.findAll();
        List<UserDTO> userDTOS = Arrays.asList(modelMapper.map(userList, UserDTO[].class));
        return userDTOS;
    }

}
