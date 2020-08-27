package com.tez.kariyer.model.entity;

import com.tez.kariyer.model.entity.address.Ilce;
import com.tez.kariyer.model.entity.address.Ulke;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommunicationInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String surname;
    private String tittle;
    private String email;
    private Date birthDate;
    private String phone;
    @OneToOne
    protected Ilce ilce;
    @OneToOne
    protected User user;
    private String web;

}
