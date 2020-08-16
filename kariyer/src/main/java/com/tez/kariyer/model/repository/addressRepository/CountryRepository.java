package com.tez.kariyer.model.repository.addressRepository;

import com.tez.kariyer.model.entity.address.Country;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends CrudRepository<Country,Integer> {
}
