package com.tez.kariyer.model.repository.addressRepository;

import com.tez.kariyer.model.entity.address.City;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends CrudRepository<City, Integer> {

    List<City> findByCountryId(Integer id);
}
