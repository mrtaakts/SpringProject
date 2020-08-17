package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.CommunicationInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunicationInfoRepository extends CrudRepository<CommunicationInfo, Integer> {
}
