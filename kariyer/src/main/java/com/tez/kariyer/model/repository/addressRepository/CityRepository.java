package com.tez.kariyer.model.repository.addressRepository;

import com.tez.kariyer.model.entity.address.Il;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends CrudRepository<Il, Integer> {

    List<Il> findByUlke(Integer id);

}
