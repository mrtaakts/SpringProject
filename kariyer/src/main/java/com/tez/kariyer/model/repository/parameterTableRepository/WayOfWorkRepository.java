package com.tez.kariyer.model.repository.parameterTableRepository;

import com.tez.kariyer.model.entity.parameterTable.WayOfWork;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WayOfWorkRepository extends CrudRepository<WayOfWork,Integer> {

    WayOfWork findByWayOfWork(String wayofwork);
}
