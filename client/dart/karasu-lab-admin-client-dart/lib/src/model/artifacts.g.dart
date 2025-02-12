// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'artifacts.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Artifacts extends Artifacts {
  @override
  final String id;
  @override
  final String name;
  @override
  final String iconUrl;
  @override
  final BuiltList<ArtifactSets>? artifactSets;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  @override
  final VersionsEntity version;

  factory _$Artifacts([void Function(ArtifactsBuilder)? updates]) =>
      (new ArtifactsBuilder()..update(updates))._build();

  _$Artifacts._(
      {required this.id,
      required this.name,
      required this.iconUrl,
      this.artifactSets,
      required this.createdAt,
      required this.updatedAt,
      required this.version})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'Artifacts', 'id');
    BuiltValueNullFieldError.checkNotNull(name, r'Artifacts', 'name');
    BuiltValueNullFieldError.checkNotNull(iconUrl, r'Artifacts', 'iconUrl');
    BuiltValueNullFieldError.checkNotNull(createdAt, r'Artifacts', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(updatedAt, r'Artifacts', 'updatedAt');
    BuiltValueNullFieldError.checkNotNull(version, r'Artifacts', 'version');
  }

  @override
  Artifacts rebuild(void Function(ArtifactsBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ArtifactsBuilder toBuilder() => new ArtifactsBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Artifacts &&
        id == other.id &&
        name == other.name &&
        iconUrl == other.iconUrl &&
        artifactSets == other.artifactSets &&
        createdAt == other.createdAt &&
        updatedAt == other.updatedAt &&
        version == other.version;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, artifactSets.hashCode);
    _$hash = $jc(_$hash, createdAt.hashCode);
    _$hash = $jc(_$hash, updatedAt.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Artifacts')
          ..add('id', id)
          ..add('name', name)
          ..add('iconUrl', iconUrl)
          ..add('artifactSets', artifactSets)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt)
          ..add('version', version))
        .toString();
  }
}

class ArtifactsBuilder implements Builder<Artifacts, ArtifactsBuilder> {
  _$Artifacts? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  ListBuilder<ArtifactSets>? _artifactSets;
  ListBuilder<ArtifactSets> get artifactSets =>
      _$this._artifactSets ??= new ListBuilder<ArtifactSets>();
  set artifactSets(ListBuilder<ArtifactSets>? artifactSets) =>
      _$this._artifactSets = artifactSets;

  DateTime? _createdAt;
  DateTime? get createdAt => _$this._createdAt;
  set createdAt(DateTime? createdAt) => _$this._createdAt = createdAt;

  DateTime? _updatedAt;
  DateTime? get updatedAt => _$this._updatedAt;
  set updatedAt(DateTime? updatedAt) => _$this._updatedAt = updatedAt;

  VersionsEntityBuilder? _version;
  VersionsEntityBuilder get version =>
      _$this._version ??= new VersionsEntityBuilder();
  set version(VersionsEntityBuilder? version) => _$this._version = version;

  ArtifactsBuilder() {
    Artifacts._defaults(this);
  }

  ArtifactsBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _iconUrl = $v.iconUrl;
      _artifactSets = $v.artifactSets?.toBuilder();
      _createdAt = $v.createdAt;
      _updatedAt = $v.updatedAt;
      _version = $v.version.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Artifacts other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$Artifacts;
  }

  @override
  void update(void Function(ArtifactsBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Artifacts build() => _build();

  _$Artifacts _build() {
    _$Artifacts _$result;
    try {
      _$result = _$v ??
          new _$Artifacts._(
              id: BuiltValueNullFieldError.checkNotNull(id, r'Artifacts', 'id'),
              name: BuiltValueNullFieldError.checkNotNull(
                  name, r'Artifacts', 'name'),
              iconUrl: BuiltValueNullFieldError.checkNotNull(
                  iconUrl, r'Artifacts', 'iconUrl'),
              artifactSets: _artifactSets?.build(),
              createdAt: BuiltValueNullFieldError.checkNotNull(
                  createdAt, r'Artifacts', 'createdAt'),
              updatedAt: BuiltValueNullFieldError.checkNotNull(
                  updatedAt, r'Artifacts', 'updatedAt'),
              version: version.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'artifactSets';
        _artifactSets?.build();

        _$failedField = 'version';
        version.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'Artifacts', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
