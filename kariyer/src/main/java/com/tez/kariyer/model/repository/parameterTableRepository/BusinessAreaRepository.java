package com.tez.kariyer.model.repository.parameterTableRepository;

import com.tez.kariyer.model.entity.parameterTable.BusinessArea;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessAreaRepository extends CrudRepository<BusinessArea, Integer> {

    BusinessArea findByBusinessArea(String businessarea);
}
