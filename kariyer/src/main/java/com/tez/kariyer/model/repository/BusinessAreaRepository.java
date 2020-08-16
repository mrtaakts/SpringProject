package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.BusinessArea;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessAreaRepository extends CrudRepository<BusinessArea, Integer> {
}
