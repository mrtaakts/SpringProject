package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.SummaryInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SummaryInfoRepository extends CrudRepository<SummaryInfo,Integer> {
}
