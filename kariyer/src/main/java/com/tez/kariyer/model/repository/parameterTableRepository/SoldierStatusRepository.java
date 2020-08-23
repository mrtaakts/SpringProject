package com.tez.kariyer.model.repository.parameterTableRepository;

import com.tez.kariyer.model.entity.parameterTable.SoldierStatus;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SoldierStatusRepository extends CrudRepository<SoldierStatus, Integer> {

    @Query("select soldier from SoldierStatus soldier where soldier.id=:id")
    SoldierStatus findByIdd(@Param("id") Integer id);
}
