package com.tez.kariyer.model.entity.address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ulke {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ulke_id")
    private int id;
    private String ulkeKod;
    private String ulke;

}
