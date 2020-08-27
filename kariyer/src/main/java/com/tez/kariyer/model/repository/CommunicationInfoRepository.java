package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.CommunicationInfo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunicationInfoRepository extends CrudRepository<CommunicationInfo, Integer> {
    @Query("select comuser from CommunicationInfo comuser where comuser.user.id=:id")
    CommunicationInfo findByUserId(@Param("id") Integer id);
}
