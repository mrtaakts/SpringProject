package com.tez.kariyer.model.entity;

import com.tez.kariyer.model.entity.address.Ulke;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserPrivateInfo implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_info_id")
    private int id;
    private String gender;
    @OneToOne
    private Ulke ulke;

//    @OneToMany(mappedBy = "userPrivateInfo", fetch = FetchType.LAZY,
//            cascade = CascadeType.PERSIST)
    private String driverLicense;

    private String salaryExpectation;
    private Date salaryExpectationDate;

    @OneToOne
    private User user;

}
