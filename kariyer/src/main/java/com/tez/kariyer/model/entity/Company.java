package com.tez.kariyer.model.entity;

import com.tez.kariyer.model.entity.address.City;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String companyName;

    private String sektor;

    private String foundationYear;

    private String address;

    private String employeesNumber;

    private String website;

    private String about;

    @OneToOne
    protected City city;


}
