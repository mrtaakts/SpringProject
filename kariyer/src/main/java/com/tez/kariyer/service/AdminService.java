package com.tez.kariyer.service;

import com.tez.kariyer.dto.UserDTO;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.UserRepository;
import com.tez.kariyer.response.ResponseItem;
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

    public ResponseItem delete(int id){
        ResponseItem responseItem = new ResponseItem();

        try {
            userRepository.delete(userRepository.findByID(id));
            responseItem.setResult(true);
            responseItem.setMessage("İşlem Başarılı!");
            return responseItem;

        }catch (Exception e){
            e.printStackTrace();
            responseItem.setMessage("İşlem Başarız!!!");
            responseItem.setResult(false);
            return responseItem;
        }
    }

    public ResponseItem save(UserDTO userDTO){
        ResponseItem responseItem = new ResponseItem();
        try {
            User user = userRepository.findByID(userDTO.getId());
            user.setUsername(userDTO.getUsername());
            user.setName(userDTO.getName());
            user.setSurname(userDTO.getSurname());
            user.setEmail(userDTO.getEmail());
            if (userDTO.getRoles().equals("1")) {
                user.setRoles("BIREYSEL_ROLE");
            } else if (userDTO.getRoles().equals("0")) {
                user.setRoles("KURUMSAL_ROLE");
            } else
                user.setRoles("ADMIN");
            userRepository.save(user);
            responseItem.setMessage("İşlem Başarılı!");
            responseItem.setResult(true);
            return responseItem;
        }catch (Exception e){
            e.printStackTrace();
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız!!!");
            return responseItem;
        }
    }

}
