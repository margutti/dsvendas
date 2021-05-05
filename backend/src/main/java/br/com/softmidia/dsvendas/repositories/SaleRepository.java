package br.com.softmidia.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.softmidia.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
