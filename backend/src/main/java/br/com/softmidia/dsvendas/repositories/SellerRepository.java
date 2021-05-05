package br.com.softmidia.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.softmidia.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
