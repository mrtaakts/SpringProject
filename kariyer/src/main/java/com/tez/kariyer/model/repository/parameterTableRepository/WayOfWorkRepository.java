package com.tez.kariyer.model.repository.parameterTableRepository;

import com.tez.kariyer.model.entity.parameterTable.WayOfWork;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface WayOfWorkRepository extends CrudRepository<WayOfWork,Integer> {

    WayOfWork findByWayOfWork(String wayofwork);

    @Query("select way from WayOfWork way where way.id=:id")
    WayOfWork findByIdd(@Param("id") Integer id);
}
