package com.tez.kariyer.model.entity;

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
    protected Ulke ulke;
    @OneToOne
    protected User user;

}
