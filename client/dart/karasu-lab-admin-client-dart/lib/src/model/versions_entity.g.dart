// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'versions_entity.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$VersionsEntity extends VersionsEntity {
  @override
  final String id;
  @override
  final String? name;
  @override
  final String versionString;
  @override
  final bool released;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  @override
  final BuiltList<GICharacter>? characters;
  @override
  final BuiltList<Weapon>? weapons;
  @override
  final BuiltList<ArtifactSets>? artifactSets;
  @override
  final BuiltList<Country>? countries;
  @override
  final BuiltList<Artifacts>? artifacts;

  factory _$VersionsEntity([void Function(VersionsEntityBuilder)? updates]) =>
      (new VersionsEntityBuilder()..update(updates))._build();

  _$VersionsEntity._(
      {required this.id,
      this.name,
      required this.versionString,
      required this.released,
      required this.createdAt,
      required this.updatedAt,
      this.characters,
      this.weapons,
      this.artifactSets,
      this.countries,
      this.artifacts})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'VersionsEntity', 'id');
    BuiltValueNullFieldError.checkNotNull(
        versionString, r'VersionsEntity', 'versionString');
    BuiltValueNullFieldError.checkNotNull(
        released, r'VersionsEntity', 'released');
    BuiltValueNullFieldError.checkNotNull(
        createdAt, r'VersionsEntity', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(
        updatedAt, r'VersionsEntity', 'updatedAt');
  }

  @override
  VersionsEntity rebuild(void Function(VersionsEntityBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  VersionsEntityBuilder toBuilder() =>
      new VersionsEntityBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is VersionsEntity &&
        id == other.id &&
        name == other.name &&
        versionString == other.versionString &&
        released == other.released &&
        createdAt == other.createdAt &&
        updatedAt == other.updatedAt &&
        characters == other.characters &&
        weapons == other.weapons &&
        artifactSets == other.artifactSets &&
        countries == other.countries &&
        artifacts == other.artifacts;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, versionString.hashCode);
    _$hash = $jc(_$hash, released.hashCode);
    _$hash = $jc(_$hash, createdAt.hashCode);
    _$hash = $jc(_$hash, updatedAt.hashCode);
    _$hash = $jc(_$hash, characters.hashCode);
    _$hash = $jc(_$hash, weapons.hashCode);
    _$hash = $jc(_$hash, artifactSets.hashCode);
    _$hash = $jc(_$hash, countries.hashCode);
    _$hash = $jc(_$hash, artifacts.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'VersionsEntity')
          ..add('id', id)
          ..add('name', name)
          ..add('versionString', versionString)
          ..add('released', released)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt)
          ..add('characters', characters)
          ..add('weapons', weapons)
          ..add('artifactSets', artifactSets)
          ..add('countries', countries)
          ..add('artifacts', artifacts))
        .toString();
  }
}

class VersionsEntityBuilder
    implements Builder<VersionsEntity, VersionsEntityBuilder> {
  _$VersionsEntity? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _versionString;
  String? get versionString => _$this._versionString;
  set versionString(String? versionString) =>
      _$this._versionString = versionString;

  bool? _released;
  bool? get released => _$this._released;
  set released(bool? released) => _$this._released = released;

  DateTime? _createdAt;
  DateTime? get createdAt => _$this._createdAt;
  set createdAt(DateTime? createdAt) => _$this._createdAt = createdAt;

  DateTime? _updatedAt;
  DateTime? get updatedAt => _$this._updatedAt;
  set updatedAt(DateTime? updatedAt) => _$this._updatedAt = updatedAt;

  ListBuilder<GICharacter>? _characters;
  ListBuilder<GICharacter> get characters =>
      _$this._characters ??= new ListBuilder<GICharacter>();
  set characters(ListBuilder<GICharacter>? characters) =>
      _$this._characters = characters;

  ListBuilder<Weapon>? _weapons;
  ListBuilder<Weapon> get weapons =>
      _$this._weapons ??= new ListBuilder<Weapon>();
  set weapons(ListBuilder<Weapon>? weapons) => _$this._weapons = weapons;

  ListBuilder<ArtifactSets>? _artifactSets;
  ListBuilder<ArtifactSets> get artifactSets =>
      _$this._artifactSets ??= new ListBuilder<ArtifactSets>();
  set artifactSets(ListBuilder<ArtifactSets>? artifactSets) =>
      _$this._artifactSets = artifactSets;

  ListBuilder<Country>? _countries;
  ListBuilder<Country> get countries =>
      _$this._countries ??= new ListBuilder<Country>();
  set countries(ListBuilder<Country>? countries) =>
      _$this._countries = countries;

  ListBuilder<Artifacts>? _artifacts;
  ListBuilder<Artifacts> get artifacts =>
      _$this._artifacts ??= new ListBuilder<Artifacts>();
  set artifacts(ListBuilder<Artifacts>? artifacts) =>
      _$this._artifacts = artifacts;

  VersionsEntityBuilder() {
    VersionsEntity._defaults(this);
  }

  VersionsEntityBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _versionString = $v.versionString;
      _released = $v.released;
      _createdAt = $v.createdAt;
      _updatedAt = $v.updatedAt;
      _characters = $v.characters?.toBuilder();
      _weapons = $v.weapons?.toBuilder();
      _artifactSets = $v.artifactSets?.toBuilder();
      _countries = $v.countries?.toBuilder();
      _artifacts = $v.artifacts?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(VersionsEntity other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$VersionsEntity;
  }

  @override
  void update(void Function(VersionsEntityBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  VersionsEntity build() => _build();

  _$VersionsEntity _build() {
    _$VersionsEntity _$result;
    try {
      _$result = _$v ??
          new _$VersionsEntity._(
              id: BuiltValueNullFieldError.checkNotNull(
                  id, r'VersionsEntity', 'id'),
              name: name,
              versionString: BuiltValueNullFieldError.checkNotNull(
                  versionString, r'VersionsEntity', 'versionString'),
              released: BuiltValueNullFieldError.checkNotNull(
                  released, r'VersionsEntity', 'released'),
              createdAt: BuiltValueNullFieldError.checkNotNull(
                  createdAt, r'VersionsEntity', 'createdAt'),
              updatedAt: BuiltValueNullFieldError.checkNotNull(
                  updatedAt, r'VersionsEntity', 'updatedAt'),
              characters: _characters?.build(),
              weapons: _weapons?.build(),
              artifactSets: _artifactSets?.build(),
              countries: _countries?.build(),
              artifacts: _artifacts?.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'characters';
        _characters?.build();
        _$failedField = 'weapons';
        _weapons?.build();
        _$failedField = 'artifactSets';
        _artifactSets?.build();
        _$failedField = 'countries';
        _countries?.build();
        _$failedField = 'artifacts';
        _artifacts?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'VersionsEntity', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
