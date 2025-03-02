// portfolio.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  categories: string[] = ['All Works', 'Residential', 'Public', 'Corporate'];
  activeCategory: string = 'All Works';
  portfolioItems: PortfolioItem[] = [];
  filteredPortfolioItems: PortfolioItem[] = [];
  itemsPerPage: number = 6;
  currentPage: number = 1;
  hasMoreItems: boolean = false;

  ngOnInit(): void {
    this.portfolioItems = [
      {
        id: 1,
        title: 'Elemental Harmony',
        description: 'Custom metal sculpture for modern home interior',
        imageUrl: 'https://images.unsplash.com/photo-1578845557038-44d0a52bbdee?q=80&auto=format&fit=crop',
        category: 'Residential'
      },
      {
        id: 2,
        title: 'Urban Ascension',
        description: 'Large-scale public installation in city center',
        imageUrl: 'https://images.unsplash.com/photo-1575995872537-3793d29d9114?q=80&auto=format&fit=crop',
        category: 'Public'
      },
      {
        id: 3,
        title: 'Corporate Synergy',
        description: 'Statement piece for corporate headquarters',
        imageUrl: 'https://images.unsplash.com/photo-1618315601000-c495a21a99a1?q=80&auto=format&fit=crop',
        category: 'Corporate'
      },
      {
        id: 4,
        title: 'Structured Flow',
        description: 'Commissioned piece for urban park',
        imageUrl: 'https://images.unsplash.com/photo-1582542140528-485d391a5be6?q=80&auto=format&fit=crop',
        category: 'Public'
      },
      {
        id: 5,
        title: 'Geometric Elegance',
        description: 'Private collection piece',
        imageUrl: 'https://images.unsplash.com/photo-1496147539180-13d881ea40ea?q=80&auto=format&fit=crop',
        category: 'Residential'
      },
      {
        id: 6,
        title: 'Industrial Grace',
        description: 'Commercial lobby installation',
        imageUrl: 'https://images.unsplash.com/photo-1570851325674-e827f59e6858?q=80&auto=format&fit=crop',
        category: 'Corporate'
      },
      // Additional items that will be loaded with "Load More"
      {
        id: 7,
        title: 'Reflective Balance',
        description: 'Outdoor residential garden sculpture',
        imageUrl: 'https://images.unsplash.com/photo-1588515724527-074a7a56616c?q=80&auto=format&fit=crop',
        category: 'Residential'
      },
      {
        id: 8,
        title: 'Urban Rhythm',
        description: 'Downtown plaza installation',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&auto=format&fit=crop',
        category: 'Public'
      },
      {
        id: 9,
        title: 'Executive Vision',
        description: 'Boardroom centerpiece for tech company',
        imageUrl: 'https://images.unsplash.com/photo-1557014280-4dbe3c39ca95?q=80&auto=format&fit=crop',
        category: 'Corporate'
      }
    ];
    
    this.filterItems();
  }

  filterItems(): void {
    const filtered = this.activeCategory === 'All Works' 
      ? this.portfolioItems 
      : this.portfolioItems.filter(item => item.category === this.activeCategory);
    
    this.filteredPortfolioItems = filtered.slice(0, this.currentPage * this.itemsPerPage);
    this.hasMoreItems = filtered.length > this.filteredPortfolioItems.length;
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    this.currentPage = 1;
    this.filterItems();
  }

  loadMoreItems(): void {
    this.currentPage++;
    this.filterItems();
  }
}