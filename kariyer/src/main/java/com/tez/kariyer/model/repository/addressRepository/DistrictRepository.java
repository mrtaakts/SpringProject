package com.tez.kariyer.model.repository.addressRepository;

import com.tez.kariyer.model.entity.address.Ilce;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DistrictRepository extends CrudRepository<Ilce,Integer> {

    List<Ilce> findByCity_Id(Integer id);
}
