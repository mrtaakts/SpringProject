package com.tez.kariyer.model.repository.addressRepository;

import com.tez.kariyer.model.entity.address.Ulke;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends CrudRepository<Ulke,Integer> {
}
