package com.tez.kariyer.model.entity.address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class District {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private  int id;
    private String district;

    @ManyToOne(fetch = FetchType.LAZY)
    private City city;



}
